import requests
from bs4 import BeautifulSoup

def requisicao(produto):
    link = 'https://www.google.com/search?tbm=shop&hl=en-BR&source=hp&biw=&bih=&q='+str(produto)+'&oq='+str(produto)+'&gs_l=products-cc.3..0l10.1776.2524.0.2909.7.5.0.2.2.0.180.494.0j3.3.0....0...1ac.1.34.products-cc..2.5.504.KIs6RjJAIKA'
    req = requests.get(link)
    soup = BeautifulSoup(req.content, 'html.parser')
    return soup

def produtos(x):
    for i in x.find_all('a'):
        nome_do_produto = i.get()
        print(nome_do_produto)




produto = input('Digite o Produto a ser procurado ')
produtos(requisicao(produto))
