from django.urls import path, include, re_path
from . import views
from django.views.generic import ListView, DetailView
from news.models import Articles

urlpatterns = [
    #path('',ListView.as_view(queryset=Articles.objects.all().order_by("-date")[:20], template_name='news/posts.html')),
    path('', views.news, name='news'),
    re_path(r'^(?P<new_id>\d+)/$', views.new, name='new'),
    re_path(r'^addlike/(?P<article_id>\d+)/$', views.addlike, name='addlike'),
    re_path(r'^addcomment/(?P<article_id>\d+)/$', views.addcomment, name='addcomment'),
    re_path(r'^addlikecomment/(?P<article_id>\d+)/(?P<comment_id>\d+)$', views.addlikecomment, name='addlikecomment'),
    #re_path(r'^(?P<pk>\d+)$', DetailView.as_view(model = Articles, template_name = "news/post.html")),

]
