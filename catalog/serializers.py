from rest_framework import serializers
from .models import Catalog, Product, ProductType, Content, ContentImages

class CatalogSerialzier(serializers.ModelSerializer):
    class Meta():
        model = ProductType
        fields = ("name", "info", 'productType', 'id')

class ProductSerializer(serializers.ModelSerializer):
    class Meta():
        model = Product
        fields = ('name', 'info', 'id', 'product', 'image')

class ContentSerializer( serializers.ModelSerializer):
    class Meta():
        model = Content
        fields = '__all__'

class ContentImagesSerializer( serializers.ModelSerializer):
    class Meta():
        model = ContentImages
        fields = '__all__'