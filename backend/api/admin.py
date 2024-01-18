from django.contrib import admin
from .models import Message

class MessageAdmin(admin.ModelAdmin):
    list_display = ('fromNumber', 'toNumber', 'content', 'type', 'created_at')
    search_fields = ('fromNumber', 'toNumber', 'content', 'type')
    list_filter = ('type', 'created_at')

admin.site.register(Message, MessageAdmin)
