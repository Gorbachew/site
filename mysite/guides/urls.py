from django.urls import path, re_path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    re_path(r'^bootstrap/$', views.bootstrap, name='bootstrap'),
    re_path(r'^django/$', views.django, name='django'),
    re_path(r'^jquery/$', views.jquery, name='jquery'),
    re_path(r'^js/$', views.js, name='js'),
    re_path(r'^css/$', views.css, name='css'),
    re_path(r'^html/$', views.html, name='html'),
    re_path(r'^sql/$', views.sql, name='sql'),
    re_path(r'^git/$', views.git, name='git'),
]
