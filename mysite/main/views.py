from django.shortcuts import render,redirect
from django.template import Context
from news.models import Articles, Comments
from django.db.models import Count,Q
from django.core.exceptions import ObjectDoesNotExist
from news.forms import CommentForm
from django.template.context_processors import csrf
from django.contrib import auth
from loginsys.models import UsersImages
from django.contrib.auth.models import User

def avatar(request,user_id):
    Avatar = {}
    try:
        Avatar['Avatar'] = UsersImages.objects.filter(user_id = str(user_id),avatar = 'True')
        Avatar['BandAvatar'] = UsersImages.objects.filter(user_id = request.user,avatar = 'True')
    except:
        Avatar['Avatar'] = {}
        Avatar['BandAvatar'] = {}
    return Avatar

def index(request):
    args = {}
    try:
        args['BandAvatar'] = avatar(request,request.user.id)['BandAvatar']
        return render(request, 'main/index.html',args)
    except ObjectDoesNotExist:
        return render(request, 'main/index.html')

def error(request):
    args = {}
    try:
        args['BandAvatar'] = avatar(request,request.user)['BandAvatar']
        return render(request, 'main/error.html',args)
    except:
        return render(request, 'main/error.html')
