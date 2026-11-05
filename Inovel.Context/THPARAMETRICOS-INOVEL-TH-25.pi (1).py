#!/usr/bin/env python
# coding: utf-8

# Resolução dos exercícios do Testes de Hipóteses

# In[1]:


from scipy import stats
import numpy as np


# Exercício 1

# In[2]:


n_amostra = 200

# 1.1
média = 500
desvio_padrão = np.sqrt(25**2 / n_amostra)
print(f'{desvio_padrão:.3f}')

c = stats.norm.ppf(0.05, média, desvio_padrão)
print(f'Limite superior da RR é {c:.3f}')

print(f'A região de rejeição (RR) é ]-inf,{c:.2f}]')

# 1.2
valor_p = stats.norm.cdf(498, média, desvio_padrão)
print(f'O valor de prova (valor-p) é {valor_p:.3f}')


# Exercício 2

# In[3]:


n_amostra = 30

média = 90
desvio_padrão = np.sqrt(20**2 / n_amostra)

c = stats.norm.ppf(0.05, média, desvio_padrão)
print(f'Limite superior da RR é {c:.3f}')

print(f'A região de rejeição (RR) é ]-inf,{c:.2f}]')


# Exercício 3

# In[4]:


n_amostra = 100

p = 0.20

var = (p * (1 - p)) / n_amostra
desvio_padrão = np.sqrt(var)
print(f'Variância é {var:.4f} e desvio padrão é {desvio_padrão:.4f}')

c = stats.norm.ppf(0.04, p, desvio_padrão)
print(f'Limite superior da RR é {c:.3f}')

print(f'A região de rejeição (RR) é ]-inf, {c:.2f}]')


# In[ ]:


Exercício 4


# In[5]:


n_amostra = 40
média = 20
desvio_padrão = np.sqrt(25 / n_amostra)

#  4.1
c = stats.norm.ppf(0.95, média, desvio_padrão)
print(f'Limite superior da RR é {c:.3f}')

print(f'A região de rejeição (RR) é [{c:.2f}, +inf[')

valor_p = 1 - stats.norm.cdf(21.1, média, desvio_padrão)
print(f'valor_p = {valor_p:.2f}')

#  4.2
alfa = 1 - stats.norm.cdf(21.1, média, desvio_padrão)
print(f'alfa = {alfa:.2f}')


# Exercício 5

# In[6]:


média = 0
n1 = n2 = 30
s1 = s2 =0.40
var = s1**2 / n1 + s2**2 / n2
desvio_padrão = np.sqrt(var)
print(f'desvio_padrão = {desvio_padrão:.2f}')

# 5.1
c = stats.norm.ppf(0.95, média, desvio_padrão)
print(f'Limite superior da RR é {c:.3f}')

print(f'A região de rejeição (RR) é [{c:.2f}, +inf[')

# 5.2
valor_p = 1 - stats.norm.cdf(0.20, média, desvio_padrão)
print(f'Novo alfa é {valor_p:.3f}')


# In[ ]:




