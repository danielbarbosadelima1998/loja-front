import { useDispatch, useSelector } from "react-redux";

const useRequest = (entity, resource, query = null) => {
  const dispatch = useDispatch();
  const { data: response, isLoading, error } = useSelector(
    (state) => state[entity]
  );

  const exec = async (q = null) => await dispatch(resource(q || query));

  return [response, isLoading, error, exec];
};
export default useRequest;
