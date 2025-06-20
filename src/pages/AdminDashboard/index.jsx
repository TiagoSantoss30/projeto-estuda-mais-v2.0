
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import * as S from './styles';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const { data } = await api.get('/admin/users');
        setUsers(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        alert("Você não tem permissão para acessar esta página ou sua sessão expirou.");
        navigate('/login');
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [navigate]);

  if (loading) {
    return <h1>Carregando dados do painel...</h1>;
  }

  return (
    <S.Container>
      <S.Header>
        <h1>Painel do Administrador</h1>
        <p>Total de usuários cadastrados: {users.length}</p>
      </S.Header>
      <S.TableContainer>
        <S.Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Cargo</th>
              <th>Data de Cadastro</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.nome}</td>
                <td>{user.email}</td>
                <td><S.RoleTag role={user.role}>{user.role}</S.RoleTag></td>
                <td>{new Date(user.data_criacao).toLocaleDateString('pt-BR')}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.TableContainer>
    </S.Container>
  );
}

export default AdminDashboard;
