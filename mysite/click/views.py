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
            args['Player'] = Millionaire.objects.values('user_id').get(user_id = request.user.id)['user_id']
            args['ScorePlayer'] = Millionaire.objects.filter(user_id = request.user.id)
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
        user_id = request.GET['user_id']
        user = Millionaire.objects.get(user_id = user_id)
        user.score = score
        user.cats = cats
        user.save()
        return HttpResponse(score)
