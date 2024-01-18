from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
import re
from twilio.rest import Client
from .models import Message
from django.conf import settings
from .serializers import MessageSerializer
# Create your views here.

@csrf_exempt
@api_view(['POST'])
def sendSms(request):
    phoneNumber = request.data['phoneNumber']
    content = request.data['content']
     
    if not re.match(r'^\+91[6789]\d{9}$', phoneNumber):
        return Response({'error': 'Invalid Indian phone number format'},status=status.HTTP_400_BAD_REQUEST)

    
   
    # Sending sms

    client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
    message = client.messages.create(
        body=content,
        from_=settings.TWILIO_PHONE_NUMBER,
        to=phoneNumber
    )
    if message:
        message=Message.objects.create(fromNumber=settings.TWILIO_PHONE_NUMBER,toNumber=phoneNumber,content=content,type="sms")
        serializer=MessageSerializer(message)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)
@csrf_exempt
@api_view(['POST'])
def sendWhatsappMessage(request):
    phoneNumber = request.data['phoneNumber']
    content = request.data['content']
     
    if not re.match(r'^\+91[6789]\d{9}$', phoneNumber):
        return Response({'error': 'Invalid Indian phone number format'},status=status.HTTP_400_BAD_REQUEST)

    # Sending Whatsapp text
    client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)

    message = client.messages.create(
        body=content,
        from_=settings.TWILIO_PHONE_NUMBER_WHATSAPP,
        to=f"whatsapp:{phoneNumber}"
    )
    if message:
        message=Message.objects.create(fromNumber=settings.TWILIO_PHONE_NUMBER,toNumber=phoneNumber,content=content,type="whatsapp")
        serializer=MessageSerializer(message)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
@api_view(['POST'])
def sendCall(request):
    phoneNumber = request.data['phoneNumber']
    content = request.data['content']
     
    if not re.match(r'^\+91[6789]\d{9}$', phoneNumber):
        return Response({'error': 'Invalid Indian phone number format'},status=status.HTTP_400_BAD_REQUEST)
    # sending call
    client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)

    twiml_response = f'<Response><Say>{content}</Say></Response>'
    try:
        call = client.calls.create(
            twiml=twiml_response,
            to=phoneNumber,
            from_=settings.TWILIO_PHONE_NUMBER
        )
        if call:
            call=Message.objects.create(fromNumber=settings.TWILIO_PHONE_NUMBER,toNumber=phoneNumber,content=content,type="call")
            serializer=MessageSerializer(call)
            return Response(serializer.data,status=status.HTTP_200_OK)
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getALL(request):
    data = Message.objects.all().order_by('-created_at')
    serializer = MessageSerializer(data, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)