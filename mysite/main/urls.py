from django.urls import path, include, re_path
from . import views
from django.views.generic import ListView, DetailView
from news.models import Articles

#from django.views.generic import ListView, DetailView
#from news.models import News

urlpatterns = [
    path('', views.index, name='index'),
    path('error/', views.error, name='error'),
    #path('',ListView.as_view(queryset=News.object.all().order_by("-date")[:20],)),
]
