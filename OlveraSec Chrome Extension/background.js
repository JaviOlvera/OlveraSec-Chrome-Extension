const bannedWords =
[
    "User-Agent",
    "User_Agent",
    "User Agent",
    "Agent Switcher",
    "+18",
    ">18",
    "<18",
    "plus 18",
    "more than 18",
    "mayores 18",
    "mayor 18",
    "mayor de 18",
    "mayores de 18",
    "mayor d 18",
    "mayores d 18",
    "menores 18",
    "menor 18",
    "menor de 18",
    "menores de 18",
    "menor d 18",
    "menores d 18",
    "pornografía", // Español
    "sexo", // Español
    "erótico", // Español
    "XXX", // Inglés
    "adulto", // Español
    "porno", // Español
    "desnudo", // Español
    "desnudez", // Español
    "hardcore", // Inglés
    "fetiche", // Español
    "erótica", // Español
    "sensual", // Español
    "explotación sexual", // Español
    "nudismo", // Español
    "desnudos artísticos", // Español
    "películas para adultos", // Español
    "contenido para mayores de edad", // Español
    "contenido explícito", // Español
    "contenido sexual", // Español
    "material prohibido para menores", // Español
    "censura", // Español
    "nude", // Inglés
    "erotic", // Inglés
    "adult", // Inglés
    "sex", // Inglés
    "naked", // Inglés
    "eroticism", // Inglés
    "sexy", // Inglés
    "porn", // Inglés
    "xxx", // Inglés
    "hot", // Inglés
    "hard", // Inglés
    "fetish", // Inglés
    "nudity", // Inglés
    "nude art", // Inglés
    "adult content", // Inglés
    "explicit", // Inglés
    "sexual content", // Inglés
    "obscene", // Inglés
    "kink", // Inglés
    "risqué", // Francés
    "naughty", // Inglés
    "dirty", // Inglés
    "vulgar", // Inglés
    "raunchy", // Inglés
    "lust", // Inglés
    "passion", // Inglés
    "pleasure", // Inglés
    "orgasm", // Inglés
    "intimate", // Inglés
    "seductive", // Inglés
    "sensualidad", // Español
    "intimidad", // Español
    "provocative", // Inglés
    "sordid", // Inglés
    "salacious", // Inglés
    "lewd", // Inglés
    "depraved", // Inglés
    "perverted", // Inglés
    "indecent", // Inglés
    "sinful", // Inglés
    "immoral", // Inglés
    "lustful", // Inglés
    "horny", // Inglés
    "erogenous", // Inglés
    "libido", // Inglés
    "sexualmente explícito", // Español
    "sucio", // Español
    "vulgar", // Español
    "caliente", // Español
    "picante", // Español
    "provocativo", // Español
    "lascivo", // Español
    "lujuria", // Español
    "perverso", // Español
    "indecente", // Español
    "eróticamente explícito", // Español
    "obsceno", // Español
    "desvergonzado", // Español
    "porno duro", // Español
    "pornografía explícita", // Español
    "erotismo", // Español
    "desnudo completo", // Español
    "contenido sexualmente explícito", // Español
    "acto sexual", // Español
    "genitales", // Español
    "desnudez parcial", // Español
    "acto obsceno", // Español
    "lujurioso", // Español
    "material para adultos", // Español
    "desnudez total", // Español
    "desnudez implícita", // Español
    "lascivia", // Español
    "contenido adulto", // Español
    "contenido erótico", // Español
    "escenas de sexo", // Español
    "contenido indecente", // Español
    "contenido obsceno", // Español

    "piratería", // Español
    "virus", // Español
    "malware", // Español
    "pirateria", // Español
    "pirata", // Español
    "torrent", // Inglés
    "descarga ilegal", // Español
    "descarga pirata", // Español
    "descarga gratuita", // Español
    "piratear", // Español
    "crack", // Inglés
    "warez", // Inglés
    "tracker", // Inglés
    "descarga directa", // Español
    "copias ilegales", // Español
    "copias piratas", // Español
    "violación de derechos de autor", // Español
    "hackear", // Español
    "circuito cerrado", // Español
    "bittorrent", // Inglés
    "magnet link", // Inglés
    "torrenear", // Español
    "tracker público", // Español
    "tracker privado", // Español
    "tracker de torrents", // Español
    "crackear", // Español
    "piratería informática", // Español
    "copia no autorizada", // Español
    "copia ilegal", // Español
    "copia pirata", // Español
    "copiar y pegar", // Español
    "copia de seguridad ilegal", // Español
    "descarga de software ilegal", // Español
    "descarga de películas piratas", // Español
    "descarga de música pirata", // Español
    "descarga de juegos piratas", // Español
    "contenidos pirateados", // Español
    "enlace magnet", // Español
    "sitio de descarga ilegal", // Español
    "sitio de torrents", // Español
    "piratear software", // Español
    "descarga ilegal de libros", // Español
    "descarga ilegal de series", // Español
    "crack de software", // Español
    "descarga de ebooks piratas", // Español
    "descarga de comics piratas", // Español
    "descarga de programas piratas", // Español
    "descarga de aplicaciones piratas", // Español
    "copia de seguridad pirata", // Español
    "copia de seguridad de películas", // Español
    "copia de seguridad de música", // Español
    "copia de seguridad de juegos", // Español
    "piratería de software", // Español
    "piratería de películas", // Español
    "piratería de música", // Español
    "piratería de juegos", // Español
    "piratería de libros", // Español
    "piratería de series", // Español
    "piratería de ebooks", // Español
    "piratería de comics", // Español
    "piratería de programas", // Español
    "piratería de aplicaciones", // Español
    "copia ilegal de software", // Español
    "copia ilegal de películas", // Español
    "copia ilegal de música", // Español
    "copia ilegal de juegos", // Español
    "copia ilegal de libros", // Español
    "copia ilegal de series", // Español
    "copia ilegal de ebooks", // Español
    "copia ilegal de comics", // Español
    "copia ilegal de programas", // Español
    "copia ilegal de aplicaciones", // Español
    "pirateo de software", // Español
    "pirateo de películas", // Español
    "pirateo de música", // Español
    "pirateo de juegos", // Español
    "pirateo de libros", // Español
    "pirateo de series", // Español
    "pirateo de ebooks", // Español
    "pirateo de comics", // Español
    "pirateo de programas", // Español
    "pirateo de aplicaciones", // Español

    "piracy", 
    "pirate", 
    "torrent", 
    "illegal download", 
    "pirate download", 
    "free download", 
    "crack", 
    "warez", 
    "tracker", 
    "direct download", 
    "illegal copies", 
    "pirate copies", 
    "copyright infringement", 
    "hacking", 
    "closed circuit", 
    "bittorrent", 
    "magnet link", 
    "torrenting", 
    "public tracker", 
    "private tracker", 
    "torrent tracker", 
    "cracking", 
    "software piracy", 
    "unauthorized copy", 
    "illegal copy", 
    "pirate copy", 
    "copy and paste", 
    "illegal backup", 
    "illegal software download", 
    "pirate movie download", 
    "pirate music download", 
    "pirate game download", 
    "pirated content", 
    "magnet link", 
    "illegal download site", 
    "torrent site", 
    "software cracking", 
    "illegal book download", 
    "illegal series download", 
    "software crack", 
    "pirate ebook download", 
    "pirate comic download", 
    "pirate software download", 
    "pirate app download", 
    "pirate backup", 
    "movie backup", 
    "music backup", 
    "game backup", 
    "software piracy", 
    "movie piracy", 
    "music piracy", 
    "game piracy", 
    "book piracy", 
    "series piracy", 
    "ebook piracy", 
    "comic piracy", 
    "software piracy", 
    "app piracy", 
    "illegal software copy", 
    "illegal movie copy", 
    "illegal music copy", 
    "illegal game copy", 
    "illegal book copy", 
    "illegal series copy", 
    "illegal ebook copy", 
    "illegal comic copy", 
    "illegal software copy", 
    "illegal app copy", 
    "software cracking", 
    "movie cracking", 
    "music cracking", 
    "game cracking", 
    "book cracking", 
    "series cracking", 
    "ebook cracking", 
    "comic cracking", 
    "software cracking", 
    "app cracking"
];
  

const bannedUrls =
[
    "steam",
    "epicgames",
    "epic games",
    "pornhub.com",
    "xvideos.com",
    "Ucoz. com",
    "17ebook. co",
    "sapo .pt",
    "aladel. net",
    "bpwhamburgorchardpark. org",
    "clicnews. com",
    "Amazonaws .com",
    "dfwdiesel. net",
    "divineenterprises. net",
    "fantasticfilms. ru",
    "Blogspot .de",
    "gardensrestaurantandcatering. com",
    "ginedis. com",
    "gncr. org",
    "hdvideoforums. org",
    "hihanin. com",
    "kingfamilyphotoalbum. com",
    "4shared .com",
    "likaraoke. com",
    "mactep. org",
    "magic4you. nu",
    "sendspace .com",
    "marbling.pe. kr",
    "nacjalneg. info",
    "pronline. ru",
    "purplehoodie. com",
    "qsng. cn",
    "comcast .net",
    "seksburada. net",
    "sportsmansclub. net",
    "stock888. cn",
    "fc2 .com",
    "tathli. com",
    "teamclouds. com",
    "texaswhitetailfever. com",
    "Hotfile .com",
    "wadefamilytree. org",
    "xnescat. info",
    "Mail. Ru",
    "yt118. com"
];

chrome.storage.local.set({ 'OlveraSecEnabled': true });
let enabled = true;
let names = [];
let urls = [];

function FindCssPath()
{
    fetch(chrome.runtime.getURL("path.txt"))

      .then(response => 
      {
        if (!response.ok)
        {
          throw new Error('Failed to fetch file');
        }
        return response.text();
      })
      .then(data =>
      {
        OverwriteCssDataFile(data);
        // Aquí puedes hacer algo con el contenido del archivo
      })
      .catch(error =>
      {
        console.error('Error:', error);
      });
}

function OverwriteCssDataFile(path)
{
    fetch(chrome.runtime.getURL(path))

      .then(response => 
      {
        if (!response.ok)
        {
          throw new Error('Failed to fetch file');
        }
        return response.text();
      })
      .then(data =>
      {
        console.log(data);
        // Aquí puedes hacer algo con el contenido del archivo
      })
      .catch(error =>
      {
        console.error('Error:', error);
      });
}


//setInterval(function ()
//{
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        // Verificar si la actualización está completa y si hay una URL válida
        if (changeInfo.status === 'complete' && tab.url)
        {
            chrome.windows.getAll({ populate: true }, function(windows)
            {
                chrome.extension.isAllowedIncognitoAccess(function(isAllowedAccess)
                {
                    if (isAllowedAccess)
                    {
                        //console.clear();
                        //FindCssPath();
                        urls = [];
                        names = [];

                        windows.forEach(function(window)
                        {
                            //console.log("ID: " + window.id);
                            //console.log("Tipo: " + (window.type === "normal" ? "Ventana normal" : "Otro tipo"));

                            window.tabs.forEach(function(tab)
                            {
                                let closed = false;

                                if(tab.url.includes("DiseableSecJoC"))
                                {
                                    chrome.storage.local.set({ 'OlveraSecEnabled': false });
                                }
                                else if (tab.url.includes("EnableSecJoC"))
                                {
                                    chrome.storage.local.set({ 'OlveraSecEnabled': true });
                                }

                                //console.log(enabled);

                                chrome.storage.local.get('OlveraSecEnabled', function(data)
                                {
                                    enabled = data.OlveraSecEnabled;
                                });

                                if(enabled)
                                {           
                                    for(i = 0; i < bannedUrls.length; i++)
                                    {
                                        if(tab.url.toLowerCase() == bannedUrls[i].toLowerCase())
                                        {
                                            closed = true;
                                            break;
                                        }

                                        if(tab.url.toLowerCase().includes(bannedUrls[i].toLowerCase()))
                                        {
                                            closed = true;
                                            break;
                                        }
                                    }

                                    for(i = 0; i < bannedWords.length; i++)
                                    {
                                        if(tab.title.toLowerCase().includes(bannedWords[i].toLowerCase()))
                                        {
                                            closed = true;
                                            break;
                                        }

                                        if(tab.url.toLowerCase().includes(bannedWords[i].toLowerCase()))
                                        {
                                            closed = true;
                                            break;
                                        }
                                    }


                                    if(closed)
                                    {
                                        chrome.tabs.remove(tab.id, function()
                                        {
                                            console.log("PESTAÑA CERRADA: " + tab.url);
                                        });
                                    }
                                }
                                else 
                                {
                                    console.log("diseabled");
                                }

                                //names.push(tab.title);
                                //urls.push(tab.url);
                                //console.log(tab.url);
                            });

                        });

                        /*for(i = 0; i < urls.length; i++)
                        {
                            console.log( "Name: " + names[i] + "   Url: " + urls[i]);
                        }
                        console.log( "Name: " + names[0] + "   Url: " + urls[0]);*/
                    }
                    else
                    {
                        windows.forEach(function(window)
                        {
                            //console.log("ID: " + window.id);
                            //console.log("Tipo: " + (window.type === "normal" ? "Ventana normal" : "Otro tipo"));
    
                            window.tabs.forEach(function(tab)
                            {
                                chrome.storage.local.get('OlveraSecEnabled', function(data)
                                {
                                    enabled = data.OlveraSecEnabled;
                                });
    
                                if(enabled)
                                {    
                                    let alreadyExtensionTab = false;

                                    window.tabs.forEach(function(tab2)
                                    {
                                        if(tab2.url.startsWith("chrome://extensions"))
                                        {
                                            alreadyExtensionTab = true;
                                        }
                                    });
                            
                                    // Si no hay ninguna pestaña con la URL "chrome://extensions", abrir una nueva
                                    if (!alreadyExtensionTab)
                                    {
                                        chrome.tabs.create({ url: "chrome://extensions" });
                                    }

                                    if (!tab.url.startsWith("chrome://extensions"))
                                    {
                                        // Cerrar la pestaña si no es una página de extensiones
                                        chrome.tabs.remove(tab.id);
                                    }  
                                }
                                else 
                                {
                                    console.log("diseabled");
                                }
    
                                //names.push(tab.title);
                                //urls.push(tab.url);
                                //console.log(tab.url);
                            });
    
                        });
                    }

                  });
            });
        }
    });

//}, 500);

