from django.shortcuts import render,redirect
from django.template import Context
from news.models import Articles, Comments
from django.db.models import Count,Q
from django.core.exceptions import ObjectDoesNotExist
from news.forms import CommentForm
from django.template.context_processors import csrf
from django.contrib import auth

def index(request):


    return render(request, 'main/index.html')

def error(request):
    return render(request, 'main/error.html')
