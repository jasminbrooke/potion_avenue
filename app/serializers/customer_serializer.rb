class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :level, :budget, :priority, :satisfaction, :reviews
end
