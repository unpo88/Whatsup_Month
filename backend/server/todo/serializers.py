from rest_framework import serializers
from .models import Todo
from django.db import transaction


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        exclude = ('id', 'created_at')
        read_only_fields = ('is_completed', )

    def _get_extracted_data(self, data):
        copied_data = data.copy()
        extracted_data = {
            'title': copied_data.pop('title', None),
            'description': copied_data.pop('description', None),
        }
        return extracted_data

    @transaction.atomic
    def create(self, validated_data):
        extracted_data = self._get_extracted_data(validated_data)

        todo = Todo.objects.create(
            title=extracted_data['title'],
            description=extracted_data['description'],
        )

        return todo

    def validate(self, attrs):
        return attrs
