from django.shortcuts import render
from main.views import avatar
# Create your views here.

def index(request):
    args={}
    try:
        args['BandAvatar'] = avatar(request,request.user.id)['BandAvatar']
        return render(request, 'guides/index.html',args)
    except ObjectDoesNotExist:
        return render(request,'loginsys/login.html',args)


def bootstrap(request):
    args={}
    try:
        args['BandAvatar'] = avatar(request,request.user.id)['BandAvatar']
        return render(request, 'guides/bootstrap.html',args)
    except ObjectDoesNotExist:
        return render(request,'loginsys/login.html',args)

def django(request):
    args={}
    try:
        args['BandAvatar'] = avatar(request,request.user.id)['BandAvatar']

        return render(request, 'guides/django.html',args)
    except ObjectDoesNotExist:
        return render(request,'loginsys/login.html',args)

def jquery(request):
    args={}
    try:
        args['BandAvatar'] = avatar(request,request.user.id)['BandAvatar']

        return render(request, 'guides/jquery.html',args)
    except ObjectDoesNotExist:
        return render(request,'loginsys/login.html',args)


def js(request):
    args={}
    try:
        args['BandAvatar'] = avatar(request,request.user.id)['BandAvatar']
        return render(request, 'guides/javascript.html',args)
    except ObjectDoesNotExist:
        return render(request,'loginsys/login.html',args)


def css(request):
    args={}
    try:
        args['BandAvatar'] = avatar(request,request.user.id)['BandAvatar']

        return render(request, 'guides/css.html',args)
    except ObjectDoesNotExist:
        return render(request,'loginsys/login.html',args)
def html(request):
    args={}
    try:
        args['BandAvatar'] = avatar(request,request.user.id)['BandAvatar']

        return render(request, 'guides/html.html',args)
    except ObjectDoesNotExist:
        return render(request,'loginsys/login.html',args)

def sql(request):
    args={}
    try:
        args['BandAvatar'] = avatar(request,request.user.id)['BandAvatar']

        return render(request, 'guides/sql.html',args)
    except ObjectDoesNotExist:
        return render(request,'loginsys/login.html',args)
def git(request):
    args={}
    try:
        args['BandAvatar'] = avatar(request,request.user.id)['BandAvatar']

        return render(request, 'guides/git.html',args)
    except ObjectDoesNotExist:
        return render(request,'loginsys/login.html',args)
