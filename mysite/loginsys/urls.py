from django.urls import path, include, re_path
from . import views
from django.views.generic import ListView, DetailView
from news.models import Articles

urlpatterns = [
    #path('',ListView.as_view(queryset=Articles.objects.all().order_by("-date")[:20], template_name='news/posts.html')),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),

]
