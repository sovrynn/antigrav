function verasafe_badge_script(){
    let badges = document.querySelectorAll("[id^='verasafe-badge-']");
    let UIDs = [];
    let existing_badge_scripts = document.querySelectorAll('.vs-badge');
    let existing_badge_uids = verasafe_uid_extraction(existing_badge_scripts)
    badges.forEach( (badge) => {
        let uid = badge.getAttribute('data-uid'); 
        if (existing_badge_uids.includes(uid)) {
        } else {
            badge.setAttribute('loaded', true);
            UIDs.push(uid);
        }
        
    }
    );

    let url = `https://verasafe.com/trust-seals/badge.php?uid=${UIDs.join(',')}`;
    let script = document.createElement('script');
    script.setAttribute('uids',UIDs.join(','))
    script.setAttribute('badge',UIDs.join(','))
    script.className = "vs-badge"
    script.src = url;
    document.body.appendChild(script);
    return UIDs
}
var verasafe_uid_extraction = (uid_nested) => {
    let uids = []
    uid_nested.forEach((element) => {
        let script_uid = element.getAttribute('uids').split(',')
        uids.push(...script_uid)
    });
    return uids

}

var veraSafeBadge = (data) => {
        if (data) {
            let uids = Object.keys(data)
            uids.forEach( (uid) => {
                let pageURL = data[uid]['page_url'];
                let sealURL = data[uid]['seal_url'];
                let sealTitle = data[uid]['seal_title'];
                let markup = `<a href="${pageURL}" target="_blank"><img src="${sealURL}" alt="${sealTitle}" width="120"/></a>`;
                document.getElementById(`verasafe-badge-${uid}`).innerHTML += markup;
            }
            );
        }
    }
var UIDs = verasafe_badge_script();