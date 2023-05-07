class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :class, :level, :budget, :request, :priority, :satisfaction, :reviews
end
