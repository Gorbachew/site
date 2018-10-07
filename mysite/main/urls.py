from django.urls import path

from . import views

#from django.views.generic import ListView, DetailView
#from news.models import News

urlpatterns = [
    path('', views.index, name='index'),
    #path('',ListView.as_view(queryset=News.object.all().order_by("-date")[:20],)),
]
