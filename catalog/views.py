from django.shortcuts import render
from .models import Product, ProductType, Content, ContentImages
from .serializers import CatalogSerialzier, ProductSerializer, ContentImagesSerializer, ContentSerializer
from rest_framework import generics
from rest_framework.response import Response

class ProductList(generics.GenericAPIView):
    queryset = ''
    def get(self, request, product_id):
        queryset = Product.objects.filter(product=product_id)
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)

class ProductTypeList(generics.GenericAPIView):
    queryset = ''
    def get(self, request):
        queryset = ProductType.objects.all()
        serializer = CatalogSerialzier(queryset, many=True)
        return Response(serializer.data)

class ContentView(generics.GenericAPIView):
    queryset = ''
    def get(self, request):
        queryset = Content.objects.get(id=1)
        serializer = ContentSerializer(queryset)
        return Response(serializer.data)

class ContentImage(generics.ListAPIView):
    queryset = ContentImages.objects.all()
    serializer_class = ContentImagesSerializer

