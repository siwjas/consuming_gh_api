import {
  useState,
  useCallback,
  useEffect
} from 'react';

import {
  Container,
  Title,
  Form,
  SubmitButton,
  DelButton,
  ListRepos,
  Actions
} from './styles';

import {
  FaGithub,
  FaPlus,
  FaSpinner,
  FaBars,
  FaTrash
} from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { Wrapper } from '../wrapper';
import api from '../../services/api';

/* END OF IMPORTS */

function Main() {
  const localRepos = JSON.parse(localStorage.getItem('@repos')) || []
  const [newRepo, setNewRepo] = useState('')
  const [repos, setRepos] = useState(localRepos)
  const [loading, setLoading] = useState(false)
  const [newAlert, setNewAlert] = useState(null)

  useEffect(() => {
    localStorage.setItem('@repos', JSON.stringify(repos))
  }, [repos])

  function handleInput(e) {
    setNewRepo(e.target.value)
    setNewAlert(null)
  }

  const handleSubmit = useCallback((e) => {
    e.preventDefault()

    async function submit() {
      setLoading(true)

      try {
        if (newRepo === '') {
          throw new Error('Você precisa indicar um repositório!')
        }

        const response = await api.get(`repos/${newRepo}`)
        const hasRepo = repos.find(repo => repo.name === newRepo.trim())

        if (hasRepo) {
          throw new Error('Este Repositório já foi adicionado à sua lista!')
        }

        const repo = {
          repoId: response.data.id,
          image: response.data.owner.avatar_url,
          name: response.data.full_name,
          description: response.data.description
        }

        setRepos([...repos, repo])
        setNewRepo('')

      } catch (error) {
        setNewAlert(true)
        
        console.log(error.code)
        alert(error.message)
      } finally {
        setLoading(false)
      }
    }

    submit()
  }, [newRepo, repos])

  const handleDelete = useCallback(repo => {
    if (window.confirm(`Tem certeza que deseja excluir: ${repo}?`)) {
      const filteredRepos = repos.filter(r => r.name !== repo)
      setRepos(filteredRepos)
    }
  }, [repos])

  return (
    <>
      <Wrapper>
        <Container>
          <Title>
            <FaGithub size={32} />My favorite Repos
          </Title>

          <Form onSubmit={handleSubmit} error={newAlert}>
            <input
              type='text'
              name='repository'
              placeholder='Adicione um repo. ex.: facebook/react'
              value={newRepo}
              onChange={handleInput}
            />

            <SubmitButton loading={loading ? 1 : 0}>
              {loading ? (
                <FaSpinner size={16} />
              ) : (
                <FaPlus size={16} />
              )
              }
            </SubmitButton>
          </Form>

          <ListRepos>
            {
              repos.map((repo) => (
                <li key={repo.repoId}>
                  <span>
                    <img
                      src={repo.image}
                      alt='Avatar'
                      style={{ width: 28, borderRadius: 4 }}
                    />
                    <strong> {repo.name}</strong> :: 
                    <p>{repo.description}</p>
                  </span>
                  <Actions>
                    <Link to={`/repos/${encodeURIComponent(repo.name)}`} >
                      <FaBars size={20} />
                    </Link>

                    <DelButton onClick={() => handleDelete(repo.name)}>
                      <FaTrash size={20} />
                    </DelButton>
                  </Actions>
                </li>
              ))
            }
          </ListRepos>
        </Container>
      </Wrapper>
    </>
  );
}

export default Main