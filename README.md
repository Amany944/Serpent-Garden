# Serpent Garden

Projet de jeu Snake avec HTML, Tailwind CSS local, JavaScript et backend PHP + SQLite.

## Lancement rapide

Tu dois utiliser un vrai serveur PHP. Ouvrir `game.html` en double-cliquant dans l'explorateur ne suffit pas.

### Methode 1: avec XAMPP

1. Installe XAMPP si ce n'est pas deja fait.
2. Ouvre le dossier du projet `C:\Users\123\Music\JEU VIDEO JS`.
3. Lance `start-apache.bat` pour demarrer Apache et ouvrir le projet.
4. Si besoin, le projet est deja copie dans `C:\xampp\htdocs\serpent-garden`.
5. Ouvre ton navigateur sur:
  - `http://localhost/serpent-garden/index.html`
  - ou `http://localhost/serpent-garden/game.html`
6. Lance une partie puis termine-la pour verifier que le score est enregistre.

### Methode 2: avec le serveur PHP natif

1. Ouvre PowerShell dans le dossier du projet.
2. Lance `start-xampp.bat`.
3. Ouvre ensuite dans le navigateur:
  - `http://localhost:8000/index.html`
  - ou `http://localhost:8000/game.html`
4. Joue une partie et termine-la pour enregistrer un score.

## Verification du backend

Le score est envoye a:
- `api/index.php`

La base SQLite est creee automatiquement ici:
- `data/snake.sqlite`

Si tout marche, ce fichier apparaitra apres la premiere partie terminee.

## Si les scores ne s'enregistrent pas

1. Verifie que la page est ouverte via `http://localhost/...` et pas en `file:///...`.
2. Verifie que PHP est bien installe.
3. Verifie que l'extension SQLite de PHP est activee.
4. Verifie que le dossier `data/` est inscriptible.
5. Ouvre la console du navigateur et regarde si `api/index.php` retourne une erreur.

## Fichiers importants

- `index.html` accueil
- `game.html` jeu
- `help.html` aide
- `help.txt` documentation
- `assets/js/game.js` logique du jeu
- `assets/js/api.js` liaison front/back
- `api/index.php` API principale
- `api/db.php` creation et acces SQLite
