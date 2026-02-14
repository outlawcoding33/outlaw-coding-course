# deploy.ps1
$ErrorActionPreference = "Stop"

Write-Host "== Git add/commit/push ==" -ForegroundColor Yellow
git add -A

# commit միայն եթե կա փոփոխություն
$changed = git status --porcelain
if ($changed) {
  $msg = "deploy: " + (Get-Date -Format "yyyy-MM-dd HH:mm")
  git commit -m $msg
} else {
  Write-Host "No changes to commit." -ForegroundColor Gray
}

git push origin main

Write-Host "== Build ==" -ForegroundColor Yellow
npm run build

Write-Host "== Deploy ==" -ForegroundColor Yellow
npm run deploy

Write-Host "DONE ✅ Live should be updated." -ForegroundColor Green


# .\deploy.ps1
