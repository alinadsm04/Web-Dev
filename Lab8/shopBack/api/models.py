from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=200)

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name
        }

    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}"
    

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField(default=True)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE, default=1)

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price, 
            "count": self.count,
            "is_active": self.is_active,
            "category_id": self.category_id.to_json()  
        }

    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}, Price: {self.price}, Count: {self.count}, IsActive: {self.is_active}"
