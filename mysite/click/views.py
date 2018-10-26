from django.shortcuts import render
from main.views import avatar
# Create your views here.
def index(request):
    args={}
    try:
        args['Avatar'] = avatar(request,request.user.id)['Avatar']
        args['check'] = avatar(request,request.user.id)['check']
        return render(request, 'click/index.html',args)
    except ObjectDoesNotExist:
        return render(request, 'click/index.html',args)
