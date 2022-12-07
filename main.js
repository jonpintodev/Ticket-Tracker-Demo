document.getElementById('issueInputForm').addEventListener('submit', saveIssue)

function fetchIssues(){
  let issues = JSON.parse(localStorage.getItem('issues'))
  let issuesList = document.getElementById('issuesList')

  issuesList.innerHTML = '';

  for (let i = 0; i < issues.length; i++) {
    let id = issues[i].id
    let subject = issues[i].id
    let description = issues[i].id
    let severity = issues[i].id
    let assignedTo = issues[i].id
    let status = issues[i].status
    let statusColor = issues == "Closed" ? 'label-success' : 'label-info'

    //issuesList.innerHTML +=
  }
}

function saveIssue(e) {
  let issueId = chance.guid()
  let issueSubject = document.getElementById('issueSubjectInput').value
  let issueDesc = document.getElementById('issueDescInput').value
  let issueSeverity = document.getElementById('issueSeverityInput').value
  let issueAssignedTo = document.getElementById('issueAssignedToInput').value
  let issueStatus = 'Open'

  let issue = {
    id: issueId,
    subject: issueSubject,
    description: issueDesc,
    severity: issueSeverity,
    assignedTo: issuesAssignedTo,
    status: issueStatus 
  }

  if(localStorage.getItem('issues')===null){
    let issues = []
    issues.push(issue)
    localStorage.setItem('issues', JSON.stringify(issues))
  } else {
    let issues = JSON.parse(localStorage.getItem('issues'))
    issues.push(issue)
    localStorage.setItem('issues', JSON.stringify(issues))
  }

  document.getElementById('issueInputForm').reset();

  fetchIssues()

  e.preventDefault()
}