from django.urls import path
from . import views

urlpatterns=[
    path('sms/',views.sendSms),
    path('whatsapp/',views.sendWhatsappMessage),
    path('call/',views.sendCall),
    path('records/',views.getALL),

]