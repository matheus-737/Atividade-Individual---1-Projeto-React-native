import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Componentes de página
const PaginaInicial = () => {
  return (
    <View style={styles.pagina}>
      <Image source={require('./assets/perfil.jpg')}
        style={styles.imagem}
      />

      <Text style={styles.textoPagina}>MATHEUS MENEZES</Text>
    </View>
  );
};

const Pagina1 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.textoPagina}>Nome: MATHEUS MENEZES</Text>
      <Text style={styles.textoPagina}>Idade: 28</Text>
      <Text style={styles.textoPagina}>Endereço: Recife/PE</Text>
      <Text style={styles.textoPagina}>Telefone: 8888-9999</Text>
      <Text style={styles.textoPagina}>Email: matheus.moura@edu.pe.senac.br</Text>
    </View>
  );
};

const Pagina2 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.textoPagina}>Experiência Profissional:</Text>
      <Text style={styles.textoPagina}> Empresa: Cacau Show</Text>
      <Text style={styles.textoPagina}>Cargo: Vendedor</Text>
      <Text style={styles.textoPagina}>Período: Nov/2020 - Nov/2022</Text>
    </View>
  );
};

const Pagina3 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.textoPagina}>Cursos</Text>
      <Text style={styles.textoPagina}>Senac -  Graduação Análise e Desenvolvimento de Sistemas - Em andamento</Text>
      <Text style={styles.textoPagina}>Senac - Técnico em Redes de Computadores</Text>
    </View>
  );
};

const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('Página Inicial');

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  // Renderização condicional da página atual
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'Página Inicial':
        return <PaginaInicial />;
      case 'Página 1':
        return <Pagina1 />;
      case 'Página 2':
        return <Pagina2 />;
      case 'Página 3':
        return <Pagina3 />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Meu Currículo</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <Text>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {menuAberto && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página Inicial')}>
            <Text style={styles.menuItemText}>Página Inicial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 1')}>
            <Text style={styles.menuItemText}>Dados</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 2')}>
            <Text style={styles.menuItemText}>Experiência Profissional</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 3')}>
            <Text style={styles.menuItemText}>Cursos</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Conteúdo */}
      <View style={styles.content}>{renderizarPagina()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuIcon: {
    padding: 10,
  },
  menu: {
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoPagina: {
    fontSize: 18,
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default App;