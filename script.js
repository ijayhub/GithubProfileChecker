let searchBtn = document.querySelector('.searchBtn');
let usernameinp = document.querySelector('.usernameinp');
let card = document.querySelector('.card');

document.getElementById('myForm').addEventListener('submit', function (e) {
	e.preventDefault();
});

function getProfileData(username) {
	return fetch(`https://api.github.com/users/${username}`).then((raw) => {
		if (!raw.ok) {
			throw new Error('User not found');
		}
		return raw.json();
	});
}

function getRepos(username) {
	return fetch(
		`https://api.github.com/users/${username}/repos?sort=updated`
	).then((raw) => {
		if (!raw.ok) {
			throw new Error('Failed to fetch repos...');
		}
		return raw.json();
	});
}

function decorateProfileData(details) {
	const createdAt = details.created_at;
	const dateObj = new Date(createdAt);
	const onlyDate = dateObj.toISOString().split('T')[0];

	let data = `<div class="flex flex-col sm:flex-row gap-6 items-start">
          <!-- Avatar -->
          <div class="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500 shadow">
            <img src="${
							details.avatar_url
						}" alt="GitHub Avatar" class="w-full h-full object-cover">
          </div>

          <!-- User Info -->
          <div class="flex-1 space-y-2">
            <div>
              <h2 class="text-2xl font-bold">${
								details.name ? details.name : details.login
							}</h2>
              <p class="text-gray-400">${details.login}</p>
              <p class="mt-1 text-gray-300">${
								details.bio ? details.bio : 'There is no bio available.'
							}</p>
            </div>

            <div class="text-sm text-gray-400">
              <p>📍 ${
								details.location ? details.location : 'Anywhere on Earth'
							}</p>
              <p>🏢 Company: ${details.company ? details.company : 'N/A'}</p>
              <p>🔗 Website: <a href="#" class="hover:underline">${
								details.blog ? details.blog : 'N/A'
							}</a></p>
              <p>🗓 Joined: ${onlyDate}</p>
            </div>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-6 text-center mt-6 bg-gray-700 rounded-xl py-4">
          <div>
            <p class="text-xl font-bold text-white">${details.public_repos}</p>
            <p class="text-gray-400 text-sm">Public Repos</p>
          </div>
          <div>
            <p class="text-xl font-bold text-white">${details.followers}</p>
            <p class="text-gray-400 text-sm">Followers</p>
          </div>
          <div>
            <p class="text-xl font-bold text-white">${details.following}</p>
            <p class="text-gray-400 text-sm">Following</p>
          </div>
        </div>
      </div>`;

	card.innerHTML = data;
}

searchBtn.addEventListener('click', function () {
	let username = usernameinp.value.trim();

	// Reset previous state
	card.innerHTML = '';
	document.getElementById('error404').classList.add('hidden');

	if (username.length > 0) {
		showLoader();

		getProfileData(username)
			.then((data) => {
				decorateProfileData(data);
			})
			.catch((error) => {
				document.getElementById('error404').classList.remove('hidden');
			})
			.finally(() => {
				hideLoader();
			});
	} else {
		alert('Please Enter a valid name.');
	}
});

// Loader spinner logic
function showLoader() {
	document.getElementById('loader').classList.remove('hidden');
}

function hideLoader() {
	document.getElementById('loader').classList.add('hidden');
}
