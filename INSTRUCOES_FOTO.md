# 📸 Como Adicionar Sua Foto

## Adicionar Avatar

1. **Salve sua foto** na pasta `public/` com o nome `avatar.jpg` (ou `avatar.png`)
   - A foto deve ser quadrada (recomendado: 400x400px ou maior)
   - Formatos suportados: JPG, PNG, WebP

2. **Atualize o config.json**:
   - O campo `avatarUrl` já está configurado como `/avatar.jpg`
   - Se usar outro nome, atualize no arquivo `src/data/config.json`

## Exemplo

```
public/
  └── avatar.jpg  ← Sua foto aqui
```

O avatar aparecerá automaticamente acima do nome "Ana Neri" na página inicial.
