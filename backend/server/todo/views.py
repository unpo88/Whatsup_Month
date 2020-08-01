from rest_framework import viewsets
from django.db import transaction
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Todo
from .serializers import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    lookup_field = 'entity_id'
    lookup_url_kwarg = 'todo_entity_id'
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    http_method_names = ['get', 'post', 'put', 'delete', 'options']

    @action(methods=['PUT'],
            url_path='status',
            detail=True,
            url_name='update-status')
    @transaction.atomic
    def update_status(self, request, todo_entity_id=None):
        todo = Todo.objects.get(entity_id=todo_entity_id)

        todo.is_completed = request.data.get('is_completed')
        todo.save()

        return Response(None, 200)
