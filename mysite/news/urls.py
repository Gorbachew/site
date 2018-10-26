from django.urls import path, include, re_path
from . import views
from django.views.generic import ListView, DetailView
from news.models import Articles

urlpatterns = [
    #path('',ListView.as_view(queryset=Articles.objects.all().order_by("-date")[:20], template_name='news/posts.html')),
    path('', views.news, name='news'),
    re_path(r'^page/(\d+)/$', views.news, name='news'),
    re_path(r'^news/(?P<new_id>\d+)/$', views.new, name='new'),
    re_path(r'^news/addlike/(?P<article_id>\d+)/$', views.addlike, name='addlike'),
    re_path(r'^news/addcomment/(?P<article_id>\d+)/$', views.addcomment, name='addcomment'),
    re_path(r'^news/addpost/$', views.addpost, name='addpost'),
    re_path(r'^news/deletenews/(?P<article_id>\d+)/$', views.deletenews, name='deletenews'),
    re_path(r'^news/deletecomment/(?P<article_id>\d+)/(?P<comment_id>\d+)/$', views.deletecomment, name='deletecomment'),
    re_path(r'^news/addlikecomment/(?P<article_id>\d+)/(?P<comment_id>\d+)$', views.addlikecomment, name='addlikecomment'),
    #re_path(r'^(?P<pk>\d+)$', DetailView.as_view(model = Articles, template_name = "news/post.html")),

]
