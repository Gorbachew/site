from django.shortcuts import render,redirect
from django.template import Context
from news.models import Articles, Comments,LikesArticles,LikesComments
from django.db.models import Count,Q
from django.core.exceptions import ObjectDoesNotExist
from news.forms import CommentForm
from django.template.context_processors import csrf
from django.contrib import auth
import datetime
from django.contrib.auth.models import User
from django.utils import timezone

# Create your views here.
#Логика такая, в mysite/urls при указании в адресной строке https://adres/news/ django  переходит в приложение news и его файл urls.
#Там он видит, что отстуствие какого-либо знака после это переход в функции views/news. Эта функция возвращает файл news.html с настройками вывода всех строк из таблицы Articlesself.
#После в news.html функция for из таблицы Articles выписывает массив article и уже выводя массив на странице появляется информация

def news(request):
    args = {}
    args.update(csrf(request))
    args['articles'] = Articles.objects.all()[:20]
    #args['username'] = auth.get_user(request).username зачем-то добавил в массив информацию о юзере
    return render(request, 'news/news.html', args)

def new(request, new_id):
    comment_form = CommentForm
    args = {}
    args.update(csrf(request))
    args['article'] = Articles.objects.get(id = new_id)
    args['comments'] = Comments.objects.filter(articles_id = new_id)
    args['form'] = comment_form
    #args['username'] = auth.get_user(request).username такая-же история как с news()
    return render(request, 'news/new.html', args)


def addlike(request, article_id):
    try:
        return_path  = request.META.get('HTTP_REFERER','/')#Возврат на предыдущую страницу
        check = LikesArticles.objects.filter(articles_id = article_id,author = auth.get_user(request).id)
        if not check:#Если отстутвует запись в таблице, то выполняем добавление записи.
            #Обновляем таблицу LikesArticles
            likes = LikesArticles()
            likes.articles = Articles.objects.get(id = article_id)
            likes.date = timezone.now()
            likes.author = request.user
            likes.save()
            #Прибавление в таблицу Артиклс +1 к кол-во лайков
            article = Articles.objects.get(id = article_id)
            article.likes = LikesArticles.objects.filter(articles_id = article_id).count()
            article.save()
            return redirect(return_path)
        else:#Если запись в таблице есть то удаляем ее.
            article = Articles.objects.get(id = article_id)
            check.delete()
            article.likes = LikesArticles.objects.filter(articles_id = article_id).count()
            article.save()
            response = redirect(return_path)
            return response
    except ObjectDoesNotExist:
        raise Http404

def addcomment(request, article_id):
    if request.POST and ("pause" not in request.session):
        form = CommentForm(request.POST)
        #print(form)
        if form.is_valid():
            #Добавляем массив шаблона "Текст" в таблицу Комментарии
            #print(article)
            comment = form.save(commit=False)
            comment.articles = Articles.objects.get(id = article_id)
            #a = User.get_username(self)
            comment.author = request.user
            comment.date = timezone.now()
            form.save()
            #Увеличиваем кол-во сообщений в таблице Статьи.
            article = Articles.objects.get(id = article_id)
            comment = Comments.objects.filter(articles_id = article_id).count()
            article.comm = comment
            article.save()
            request.session.set_expiry(60)
            request.session['pause'] = True
    return redirect('/news/%s'% article_id)

def addlikecomment(request,article_id,comment_id):
    try:
        return_path  = request.META.get('HTTP_REFERER','/')#Возврат на предыдущую страницу
        check = LikesComments.objects.filter(articles_id = article_id,author = auth.get_user(request).id,comments = comment_id)
        if not check:
            likes = LikesComments()
            likes.articles = Articles.objects.get(id = article_id)
            likes.comments = Comments.objects.get(id = comment_id)
            likes.date = timezone.now()
            likes.author = request.user
            likes.save()
            comment = Comments.objects.get(id = comment_id)
            comment.likes = LikesComments.objects.filter(comments_id = comment_id).count()
            comment.save()
            return redirect(return_path)
        else:
            comment = Comments.objects.get(id = comment_id)
            check.delete()
            comment.likes = LikesComments.objects.filter(comments_id = comment_id).count()
            comment.save()
            response = redirect(return_path)
            return response
    except ObjectDoesNotExist:
        raise Http404
