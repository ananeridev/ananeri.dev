# 🤖 Automação de Conteúdo

Este projeto agora busca automaticamente o último vídeo do seu canal do YouTube!

## ✅ O que está automatizado

### YouTube (Totalmente Automatizado)
- ✅ Busca automaticamente o último vídeo do seu canal
- ✅ Atualiza o link do banner automaticamente
- ✅ Atualiza a thumbnail automaticamente
- ✅ Atualiza o título do vídeo automaticamente
- ✅ **Não precisa fazer nada manualmente!**

### LinkedIn Newsletter (Manual por enquanto)
- ⚠️ Por enquanto, ainda precisa atualizar manualmente no `config.json`
- Se não tiver link válido, o banner do LinkedIn não aparece
- Apenas o banner do YouTube será exibido

## 🔧 Como funciona

### YouTube
O sistema usa o RSS Feed do YouTube para buscar automaticamente:
- **Channel ID**: `UCBjoWT-P17Bl66D52RwqdGA`
- **Fonte**: RSS Feed público do YouTube (não precisa de API key)
- **Atualização**: A cada vez que a página é carregada

### Fluxo de Prioridade

1. **Vídeo do YouTube**:
   - Tenta buscar dinamicamente via RSS
   - Se falhar, usa o link do `config.json` (latestContent)
   - Se não tiver, usa o link padrão do featuredContent

2. **Newsletter do LinkedIn**:
   - Se tiver `latestNewsletterUrl` no config → usa
   - Se não tiver → **não mostra o banner** (só mostra YouTube)

## 📝 Configuração

### YouTube (Já configurado!)
O Channel ID já está configurado no código:
```typescript
// src/hooks/useLatestContent.ts
const YOUTUBE_CHANNEL_ID = 'UCBjoWT-P17Bl66D52RwqdGA';
```

### LinkedIn Newsletter (Manual)
Para adicionar a newsletter, edite `src/data/config.json`:

```json
{
  "latestContent": {
    "latestVideoUrl": "",  // Não precisa, é automático!
    "latestNewsletterUrl": "https://linkedin.com/newsletters/.../posts/POST_ID"
  }
}
```

**Importante**: Se deixar `latestNewsletterUrl` vazio ou não adicionar, o banner do LinkedIn não aparecerá. Apenas o YouTube será mostrado.

## 🎨 Layout Adaptativo

O layout se adapta automaticamente:
- **2 banners**: Grid de 2 colunas (YouTube + LinkedIn)
- **1 banner**: Grid de 1 coluna centralizado (apenas YouTube)

## 🔄 Atualização Automática

- **YouTube**: Atualiza automaticamente a cada carregamento da página
- **LinkedIn**: Precisa atualizar manualmente no JSON quando publicar novo conteúdo

## 🚀 Próximos Passos (Opcional)

Se quiser automatizar o LinkedIn também no futuro, você pode:

1. **Usar um serviço de automação** (Zapier, Make.com):
   - Quando publicar no LinkedIn → atualiza o JSON automaticamente

2. **GitHub Actions**:
   - Roda periodicamente e atualiza o JSON

3. **API do LinkedIn** (mais complexo):
   - Requer autenticação OAuth
   - Mais difícil de implementar

## 🐛 Troubleshooting

### Vídeo não aparece
- Verifique se o Channel ID está correto
- Verifique o console do navegador para erros
- O RSS pode ter limite de requisições (use com moderação)

### Newsletter não aparece
- Isso é esperado se não tiver `latestNewsletterUrl` configurado
- O sistema mostra apenas o YouTube quando o LinkedIn não está disponível

## 📚 Recursos

- [YouTube RSS Feed](https://www.youtube.com/feeds/videos.xml?channel_id=UCBjoWT-P17Bl66D52RwqdGA)
- [RSS2JSON API](https://rss2json.com/) - Converte RSS para JSON

---

**Dica**: Agora você só precisa se preocupar em criar conteúdo! O YouTube é atualizado automaticamente. 🎉
