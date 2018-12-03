from django.shortcuts import render,redirect
from main.views import avatar
from click.models import Millionaire
from django.template.context_processors import csrf
from django.http import HttpResponse
# Create your views here.
def Millionaires(request):
        args={}
        args.update(csrf(request))
        args['BandAvatar'] = avatar(request,request.user.id)['Avatar']
        try:
            args['id_player'] = Millionaire.objects.values('user_id').get(user_id = request.user.id)['user_id'] # Ид пользователя
            args['ScorePlayer'] = Millionaire.objects.filter(user_id = request.user.id) #Информация сессии
        except:
            pass

        return render(request, 'click/Millionaire.html',args)


def newgame(request):
    return_path  = request.META.get('HTTP_REFERER','/')#Возврат на предыдущую страницу
    if request.POST:
        form = Millionaire(
        user_id = request.user.id
        )
        form.save()
        return redirect(return_path)

def save(request):
    if request.GET:
        score = request.GET['score']
        cats = request.GET['cats']
        bastshoes = request.GET['bastshoes']
        user_id = request.GET['user_id']
        cash = request.GET['cash']
        currency = request.GET['currency']
        levelbuild = request.GET['levelbuild']
        price_bastshoes = request.GET['price_bastshoes']
        price_cats = request.GET['price_cats']
        price_upgraide_currency = request.GET['price_upgraide_currency']
        price_levelbuild = request.GET['price_levelbuild']
        cash = request.GET['cash']
        user = Millionaire.objects.get(user_id = user_id)
        user.score = score
        user.cats = cats
        user.bastshoes = bastshoes
        user.cash = cash
        user.currency = currency
        user.levelbuild = levelbuild
        user.price_bastshoes = price_bastshoes
        user.price_cats = price_cats
        user.price_upgraide_currency = price_upgraide_currency
        user.price_levelbuild = price_levelbuild
        user.save()
        return HttpResponse(score)

def check(request):
    if request.GET:
        user_id = request.GET['user_id']
        value = request.GET['value']
        print(value)
        if(value == 'currency'):
            user = Millionaire.objects.values('currency').get(user_id = user_id)
            return HttpResponse(user['currency'])
        if(value == 'score'):
            user = Millionaire.objects.values('score').get(user_id = user_id)
            return HttpResponse(user['score'])
