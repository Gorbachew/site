from django.urls import path

from . import views

#from django.views.generic import ListView, DetailView
#from news.models import News

urlpatterns = [
    path('', views.index, name='click'),
]
