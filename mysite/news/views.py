from django.shortcuts import render,redirect
from django.template import Context
from news.models import Articles, Comments,LikesArticles,LikesComments
from loginsys.models import UsersImages
from django.db.models import Count,Q
from django.core.exceptions import ObjectDoesNotExist
from news.forms import CommentForm,PostForm
from django.template.context_processors import csrf
from django.contrib import auth
import datetime
from django.core.paginator import Paginator
from django.contrib.auth.models import User
from django.utils import timezone
from main.views import avatar
# Create your views here.
#Логика такая, в mysite/urls при указании в адресной строке https://adres/ django  переходит в приложение news и его файл urls.
#Там он видит, что отстуствие какого-либо знака после это переход в функции views/news. Эта функция возвращает файл news.html с настройками вывода всех строк из таблицы Articlesself.
#После в news.html функция for из таблицы Articles выписывает массив article и уже выводя массив на странице появляется информация

def news(request, page_number = 1):
    number_of_pages = 4
    args = Articles.objects.all().order_by('-date')
    current_page = Paginator(args,number_of_pages)
    try:
        BandAvatar = avatar(request,request.user.id)['BandAvatar']
        #args['username'] = auth.get_user(request).username зачем-то добавил в массив информацию о юзере
        return render(request, 'news/news.html',{'articles': current_page.page(page_number),'BandAvatar':BandAvatar})
    except:
        #args['username'] = auth.get_user(request).username такая-же история как с news()
        return redirect('/loginsys/login/')

def new(request, new_id):
    comment_form = CommentForm
    args = {}
    args.update(csrf(request))
    args['article'] = Articles.objects.get(id = new_id)
    args['comments'] = Comments.objects.filter(articles_id = new_id)
    args['form'] = comment_form
    user_id = Comments.objects.values('author_id').filter(articles_id = new_id).distinct()
    print(user_id)
    idusersforavatar = []
    for split in user_id: #Этим for читаем queryset user_id и добавляем в список idusersforavatar ид всех юзеров которые оставили комментарии по ним ищем аватарки
        idusersforavatar.append( split['author_id'])
    args['avatarscomments'] = UsersImages.objects.filter(user_id__in = idusersforavatar,avatar = 'True')
    try:
        args['Avatar'] = avatar(request,request.user.id)['Avatar']

        args['BandAvatar'] = Avatar = avatar(request,request.user.id)['BandAvatar']
        return render(request, 'news/new.html',args)
    except:

        return redirect('/loginsys/login/')


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
            #Cверяем количество лайков в таблице Статьи и кол-во лайков связанных с этой статьей в таблице ЛайкиСтатей
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
        return redirect('loginsys/login/')

def addcomment(request, article_id):
    return_path  = request.META.get('HTTP_REFERER','/')#Возврат на предыдущую страницу
    if request.POST:
        form = CommentForm(request.POST)
        #print('\n',form,'\n')
        if form.is_valid():
            #Добавляем массив шаблона "Текст" в таблицу Комментарии
            #print(article)
            comment = form.save(commit=False)
            #print('\n',comment,'aaaaaaaaaa','\n')
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
        else:
            error = 'У вас невалидная форма сообщения'
            render(request, 'main/error.html', {'error':error})
    else:
        error = 'У вас не отправились данные на сервер'
        render(request, 'main/error.html', {'error':error})
    return redirect(return_path)


def addpost(request):
    post_form = PostForm
    args = {}
    args.update(csrf(request))
    args['form'] = post_form
    if request.POST:
        form = PostForm(request.POST)
        #print('\n',form,'\n')
        if form.is_valid():
            #Добавляем массив шаблона "Пост" в таблицу Статьи
            post = form.save(commit=False)
            post.author = request.user
            post.date = timezone.now()
            form.save()
            return redirect('/')
        else:
            error = 'У вас невалидная форма поста'
            render(request, 'main/error.html', {'error':error})
    else:
        error = 'У вас не отправились данные на сервер'
        render(request, 'main/error.html', {'error':error})
    return render(request,'news/addpost.html',args)

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
        return redirect('loginsys/login/')

def deletenews(request, article_id):

    deletepost = Articles.objects.get(id = article_id)
    deletepost.delete()
    return redirect('/')

def deletecomment(request,article_id,comment_id):
    return_path  = request.META.get('HTTP_REFERER','/')#Возврат на предыдущую страницу
    deletecomment = Comments.objects.get(id = comment_id)
    deletecomment.delete()
    #Добавляем кол-во сообщений в таблице Статьи.
    article = Articles.objects.get(id = article_id)
    comment = Comments.objects.filter(articles_id = article_id).count()
    article.comm = comment
    article.save()
    return redirect(return_path)
