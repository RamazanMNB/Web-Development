from rest_framework import mixins,generics
from ..models import Member
from ..serializer import MemberSerializer


class MemberListAPIView(mixins.ListModelMixin,mixins.CreateModelMixin,generics.GenericAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

    def get(self,request,*args,**kwargs):
        return self.list(request, *args, **kwargs)

    def post(self,request,*args,**kwargs):
        return self.create(request,*args,**kwargs)


class MemberDetailAPIView(mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixinsDestroyModelMixin,generics.GenericAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    lookup_url_kwarg = 'member_id'

    def get(self,request,*args,**kwargs):
        return self.retrieve(request,*args,**kwargs)
    def put(self,request,*args,**kwargs):
        return self.update(request,*args,**kwargs)
    def delete(self,request,*args,**kwargs):
        return self.destroy(request,*args,**kwargs)