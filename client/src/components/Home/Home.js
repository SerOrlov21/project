import React, { useState } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { getPostsBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Popup from '../Popup/Popup';
import Pagination from '../Pagination';
import useStyles from './styles';
import AddButton from '../AddButton/AddButton';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  const classes = useStyles(); {/*переменная со стилями из style.js */}
  const query = useQuery();{/* хз */}
  const page = query.get('page') || 1; {/* хз */}
  const searchQuery = query.get('searchQuery');

  const [currentId, setCurrentId] = useState(0); {/*функция для определения, пост с каким айди редактировать */}
  const dispatch = useDispatch();

  const [search, setSearch] = useState(''); {/*функция со значением поля поиска*/}
  const [tags, setTags] = useState([]); {/*теги */}
  const [activePopup, setActivePopup] = useState(false); {/*функция для открытия модального окна с созданием/редактированием поста (нажатие на плюсик) */}
  const history = useHistory();

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      history.push('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));
{/*Пометка: в тегах компонентах передаются функции, которые находятся здесь. Точно также работает и в других
  Пример: Есть функция setCurrentId. Мы хотим использовать эту функцию в компоненте Posts. 
  Запись openForm={setActivePopup}, где слева - название, под которым мы передаём функцию, 
  а в фигурных скобках указываем название функции, которая находится в текущем компоненте
 */}

 {/* Также наверху компонента мы определяли переменную classes, которая вызывает функцию useStyles(). По итогу эта функция возвращает
    в переменную classes стили, которые были прописаны в styles.js. Через точку мы указываем, какие именно стили мы хотим передать
    для того или иного компонента. Примеры видны ниже
    */}

    {/* Также в компонентах можно редактировать стили, передавая их напрямую. Как пример:
      style={{ backgroundColor: '#956541' }}, где передаётся фон с соотвествующим цветом
      */}
  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          {/*Grid - компонент сетки, засчёт которой располагаются компоненты, запись md={9} означает, что на разрешении
          md этот компонент будет занимать 9 колонок из 12. То же самое аналогично с sm и xs.
            */}
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} openForm={setActivePopup} /> {/*компонент с постами */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar className={classes.appBarSearch} position="static" color="inherit">
              {/* TextField - компонент поля ввода.
              */}
              <TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Posts" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
              {/* ChipInput - компонент поля ввода тегов
              */}
              <ChipInput
                style={{ margin: '10px 0' }}
                value={tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
                label="Search Tags"
                variant="outlined"
              />
              {/* Button - компонент кнопки (в данном случае поиска)
              */}
              <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary" style={{ backgroundColor: '#956541' }}>Search</Button>
            </AppBar>
            {/* Popup - компонент всплывающего окна, 
            */}
            <Popup currentId={currentId} setCurrentId={setCurrentId} active={activePopup} closeForm={setActivePopup}/>
            {/* Pagination - пагинация, соответственно (там где отображено, на какой мы странице и можем перейти на другие)
            */}
            {(!searchQuery && !tags.length) && (
              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
            )}
          </Grid>
        </Grid>
        {/* AddButton - кнопка плюсика, чтобы открыть добавление поста
            */}
        <AddButton openForm={setActivePopup} />
      </Container>
    </Grow>
  );
};

export default Home;
