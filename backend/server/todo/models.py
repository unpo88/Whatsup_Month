import uuid

from django.db import models


class Todo(models.Model):
    id = models.AutoField(primary_key=True)
    entity_id = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    title = models.CharField(max_length=64)
    description = models.CharField(max_length=128)
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)

    class Meta:
        db_table = "todo"
        ordering = ('-created_at', )
