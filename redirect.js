function findAndRedirect() {
    const newestSnapshotLink = document.querySelector('div.TEXT-BLOCK > a');

    if (newestSnapshotLink && newestSnapshotLink.href) {
        console.log("Archive.is Helper: Found newest snapshot. Redirecting to:", newestSnapshotLink.href);
        window.location.href = newestSnapshotLink.href;
    } else {
        console.log("Archive.is Helper: Not a snapshot list page or no snapshots found. No action taken.");
    }
}
findAndRedirect();
