from django.urls import path, re_path
from . import views
from django.conf.urls import url
from django.views.generic import TemplateView
urlpatterns = [
    # url('', views.index),
    url('^', TemplateView.as_view(template_name='frontend/index.html'))
]