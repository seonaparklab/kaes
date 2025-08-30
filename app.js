// Member data from the provided JSON
const memberData = [
  {"name": "강연실", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "강윤재", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "구도완", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "구자건", "paid_2024": "", "paid_2025": "●", "status_2024": "미납", "status_2025": "납부완료"},
  {"name": "김고운", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "김기흥", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "김대희", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "김도균", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "김동주", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "김명심", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "김문옥", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "김미숙", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "김민재", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "김민정", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "김상현", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "김선필", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "김수진", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "김우창", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "김은혜", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "김자경", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "김형진", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "김지혜", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "김희윤", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "남지영", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "노진철", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "류진수", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "류호재", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "마은희", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "문보경", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "문예화", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "문희수", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "박민선", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "박범순", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "박병상", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "박상은", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "박선아", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "박숙현", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "박순열", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "박종문", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "박진영", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "박진희", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "박태현", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "박희제", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "방윤영", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "백영경", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "서영표", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "서지현", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "성한아", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "소윤미", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "송원규", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "송인재", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "심지원", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "안새롬", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "양귀영", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "엄지연", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "오수길", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "원주영", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "유영초", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "유자인", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "윤성복", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "윤순진", "paid_2024": "", "paid_2025": "●", "status_2024": "미납", "status_2025": "납부완료"},
  {"name": "윤여일", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "윤정우", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "윤혜원", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "이상돈", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "이상헌", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "이소영", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "이승지", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "이시재", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "이윤정", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "이재혁", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "이정림", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "이정환", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "이종민", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "이태동", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "임수정", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "장근용", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "장미정", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "장신옥", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "전푸름", "paid_2024": "", "paid_2025": "●", "status_2024": "미납", "status_2025": "납부완료"},
  {"name": "정대연", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "정세경", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "정연미", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "정영신", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "정태석", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "조미성", "paid_2024": "", "paid_2025": "●", "status_2024": "미납", "status_2025": "납부완료"},
  {"name": "조성익", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "조숙정", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "조승헌", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "진상현", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "진영우", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "최규연", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "최명애", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "최용재", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "최종민", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "최하니", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "최현", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "한상진", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "한재각", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "한재윤", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "허장", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "현명주", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "홍덕화", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "홍은영", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "홍지은", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "황정화", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "김민성", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "박재묵", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "이다현", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "전준", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "강이현", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "이희진", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "김준희", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "김은희", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "황명주", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "황의진", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "김은상", "paid_2024": "", "paid_2025": "●", "status_2024": "미납", "status_2025": "납부완료"},
  {"name": "박서현", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "강미랑", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "박영실", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "배보람", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "박세영", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "류정환", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "김신영", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "최영래", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "이재현", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "원하린", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "백명수", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "지혜성", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "이철재", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "최은주", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "고제량", "paid_2024": "●", "paid_2025": "●", "status_2024": "납부완료", "status_2025": "납부완료"},
  {"name": "신지혜", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "남미자", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "염정윤", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "염우", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "김철규", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "오영애", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "남자영", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "고경빈", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "강민희", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "이지연", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "이승은", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "백운경", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "이예실", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "권소희", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "양한나", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "박성준", "paid_2024": "", "paid_2025": "", "status_2024": "미납", "status_2025": "미납"},
  {"name": "박정현", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "김은진", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "고도연", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "이희예", "paid_2024": "●", "paid_2025": "", "status_2024": "납부완료", "status_2025": "미납"},
  {"name": "이슬기", "paid_2024": "", "paid_2025": "●", "status_2024": "미납", "status_2025": "납부완료"},
  {"name": "임재진", "paid_2024": "", "paid_2025": "●", "status_2024": "미납", "status_2025": "납부완료"},
  {"name": "김성은", "paid_2024": "", "paid_2025": "●", "status_2024": "미납", "status_2025": "납부완료"},
  {"name": "전치형", "paid_2024": "", "paid_2025": "●", "status_2024": "미납", "status_2025": "납부완료"},
  {"name": "김이성", "paid_2024": "", "paid_2025": "●", "status_2024": "미납", "status_2025": "납부완료"}
];

// DOM elements
let searchInput, searchBtn, autocompleteDropdown, searchResults, noResults, resetSearchBtn;

let highlightedIndex = -1;
let currentSuggestions = [];

// Initialize the application
function initializeApp() {
    // Get DOM elements
    searchInput = document.getElementById('searchInput');
    searchBtn = document.getElementById('searchBtn');
    autocompleteDropdown = document.getElementById('autocompleteDropdown');
    searchResults = document.getElementById('searchResults');
    noResults = document.getElementById('noResults');
    resetSearchBtn = document.getElementById('resetSearch');

    // Check if all elements exist
    if (!searchInput || !searchBtn || !autocompleteDropdown || !searchResults || !noResults || !resetSearchBtn) {
        console.error('Some DOM elements are missing');
        return;
    }

    // Initialize event listeners
    initializeEventListeners();
}

function initializeEventListeners() {
    // Search input events
    searchInput.addEventListener('input', handleSearchInput);
    searchInput.addEventListener('keydown', handleKeyDown);
    searchInput.addEventListener('focus', handleSearchInput);
    
    // Search button event
    searchBtn.addEventListener('click', handleSearch);
    
    // Reset search button event
    resetSearchBtn.addEventListener('click', resetSearch);
    
    // Click outside to close dropdown
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            hideAutocomplete();
        }
    });
}

function handleSearchInput(e) {
    const query = e.target.value.trim();
    
    if (query.length === 0) {
        hideAutocomplete();
        return;
    }
    
    // Find matching members
    const matches = findMatches(query);
    
    if (matches.length > 0) {
        showAutocomplete(matches);
    } else {
        hideAutocomplete();
    }
}

function findMatches(query) {
    const queryLower = query.toLowerCase();
    
    // First, find exact matches
    const exactMatches = memberData.filter(member => 
        member.name.toLowerCase() === queryLower
    );
    
    // Then, find partial matches starting with the query
    const startMatches = memberData.filter(member => 
        member.name.toLowerCase().startsWith(queryLower) && 
        !exactMatches.includes(member)
    );
    
    // Finally, find partial matches containing the query
    const containsMatches = memberData.filter(member => 
        member.name.toLowerCase().includes(queryLower) && 
        !exactMatches.includes(member) && 
        !startMatches.includes(member)
    );
    
    // Combine all matches and limit to 10 results
    return [...exactMatches, ...startMatches, ...containsMatches].slice(0, 10);
}

function showAutocomplete(matches) {
    currentSuggestions = matches;
    highlightedIndex = -1;
    
    autocompleteDropdown.innerHTML = '';
    
    matches.forEach((member, index) => {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';
        item.textContent = member.name;
        item.addEventListener('click', () => selectMember(member));
        autocompleteDropdown.appendChild(item);
    });
    
    autocompleteDropdown.classList.remove('hidden');
}

function hideAutocomplete() {
    autocompleteDropdown.classList.add('hidden');
    highlightedIndex = -1;
    currentSuggestions = [];
}

function handleKeyDown(e) {
    const items = autocompleteDropdown.querySelectorAll('.autocomplete-item');
    
    switch (e.key) {
        case 'ArrowDown':
            e.preventDefault();
            highlightedIndex = Math.min(highlightedIndex + 1, items.length - 1);
            updateHighlight();
            break;
            
        case 'ArrowUp':
            e.preventDefault();
            highlightedIndex = Math.max(highlightedIndex - 1, -1);
            updateHighlight();
            break;
            
        case 'Enter':
            e.preventDefault();
            if (highlightedIndex >= 0 && currentSuggestions[highlightedIndex]) {
                selectMember(currentSuggestions[highlightedIndex]);
            } else {
                handleSearch();
            }
            break;
            
        case 'Escape':
            hideAutocomplete();
            searchInput.blur();
            break;
    }
}

function updateHighlight() {
    const items = autocompleteDropdown.querySelectorAll('.autocomplete-item');
    
    items.forEach((item, index) => {
        if (index === highlightedIndex) {
            item.classList.add('highlighted');
        } else {
            item.classList.remove('highlighted');
        }
    });
}

function handleSearch() {
    const query = searchInput.value.trim();
    
    if (!query) {
        return;
    }
    
    // Find exact match first
    const exactMatch = memberData.find(member => 
        member.name.toLowerCase() === query.toLowerCase()
    );
    
    if (exactMatch) {
        selectMember(exactMatch);
    } else {
        showNoResults();
    }
}

function selectMember(member) {
    hideAutocomplete();
    hideNoResults();
    displayMemberResult(member);
}

function displayMemberResult(member) {
    const checkIcon = '✓';
    const xIcon = '✗';
    
    const resultHTML = `
        <div class="member-card">
            <h2 class="member-name">${member.name}</h2>
            <div class="payment-status-grid">
                <div class="payment-status">
                    <div class="payment-year">2024년</div>
                    <div class="payment-badge payment-badge--${member.status_2024 === '납부완료' ? 'paid' : 'unpaid'}">
                        <span class="status-icon">${member.status_2024 === '납부완료' ? checkIcon : xIcon}</span>
                        ${member.status_2024}
                    </div>
                </div>
                <div class="payment-status">
                    <div class="payment-year">2025년</div>
                    <div class="payment-badge payment-badge--${member.status_2025 === '납부완료' ? 'paid' : 'unpaid'}">
                        <span class="status-icon">${member.status_2025 === '납부완료' ? checkIcon : xIcon}</span>
                        ${member.status_2025}
                    </div>
                </div>
            </div>
            <button class="btn btn--outline search-again-btn" onclick="resetSearch()">다시 검색하기</button>
        </div>
    `;
    
    searchResults.innerHTML = resultHTML;
    searchResults.classList.remove('hidden');
}

function showNoResults() {
    hideAutocomplete();
    searchResults.classList.add('hidden');
    noResults.classList.remove('hidden');
}

function hideNoResults() {
    noResults.classList.add('hidden');
}

function resetSearch() {
    searchInput.value = '';
    searchInput.focus();
    hideAutocomplete();
    hideNoResults();
    searchResults.classList.add('hidden');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Also initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}