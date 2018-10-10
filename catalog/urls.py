from django.urls import path
from django.conf.urls import url
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url('catalog/', views.ProductTypeList.as_view()),
    url('products/(?P<product_id>\w+)/$', views.ProductList.as_view()),
    url('content/', views.ContentView.as_view()),
    url('images/', views.ContentImage.as_view()),
]