from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'guides/index.html')

def bootstrap(request):
    return render(request, 'guides/bootstrap.html')

def django(request):
    return render(request, 'guides/django.html')

def jquery(request):
    return render(request, 'guides/jquery.html')

def js(request):
    return render(request, 'guides/javascript.html')

def css(request):
    return render(request, 'guides/css.html')

def html(request):
    return render(request, 'guides/html.html')

def sql(request):
    return render(request, 'guides/sql.html')

def git(request):
    return render(request, 'guides/git.html')
