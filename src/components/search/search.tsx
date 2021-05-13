import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoginContext } from 'src/context/Login';
import api from 'src/service/api';
import { Form } from './search.styled';
import { ApiGetType, FormDataType, SearchProps } from './search.types';

const Search = (props: SearchProps) => {
  const { login } = useLoginContext();
  const { responseData } = props;
  const { handleSubmit, register } = useForm();

  const handleSubmitForm = async (formData: FormDataType) => {
    const { data } = await api.get<ApiGetType>('search', {
      params: { q: formData.search, type: 'album', limit: 10 },
      headers: { Authorization: `Bearer ${login.token}` },
    });
    return responseData(data.albums.items);
  };

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <input type="text" placeholder="Busque por album" {...register('search')} />
      <button type="submit">Buscar</button>
    </Form>
  );
};

export default Search;
