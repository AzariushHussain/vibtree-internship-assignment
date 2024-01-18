from django.db import models

# Create your models here.
class Message(models.Model):
    fromNumber=models.CharField(max_length=13)
    toNumber=models.CharField(max_length=13)
    content=models.TextField()
    type=models.CharField(max_length=10)
    created_at=models.DateTimeField(auto_now_add=True)



