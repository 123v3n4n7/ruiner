from django.db import models

class Catalog(models.Model):
    name = models.CharField(max_length=50, blank=False)
    info = models.CharField(max_length=500, blank=False)

    class Meta():
        db_table = "Catalog"

    def __str__(self):
        return self.name


class ProductType(models.Model):
    productType = models.ForeignKey(Catalog, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=50, blank=False)
    info = models.CharField(max_length=500, blank=False)
    image = models.ImageField(upload_to="images/productType/", blank=True)
    class Meta():
        db_table = "ProductType"
    def __str__(self):
        return self.name

class Product(models.Model):
    def get_upload_path(instance, filename):
        return "images/product/{}/{}".format(instance.id, filename)
    product = models.ForeignKey(ProductType, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=50, blank=False)
    info = models.CharField(max_length=500, blank=False)
    data = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to=get_upload_path, blank=True)
    class Meta():
        db_table = "Product"
    def __str__(self):
        return self.name

class Content(models.Model):
    MainPaige = models.TextField(max_length=1000, blank=True)
    class Meta():
        db_table = "Content"

class ContentImages(models.Model):
    image = models.ImageField(upload_to="images/content/", blank=True)
    imageContent = models.ForeignKey(Content, on_delete=models.CASCADE, null=True)
    class Meta():
        db_table = "ContentImages"