const customFields = 'customFields($type,name,value($type,archived,avatarUrl,buildIntegration,buildLink,color(background,id),description,fullName,id,isResolved,localizedName,login,markdownText,minutes,name,presentation,ringId,text))'

const userFields = 'id,login,name,fullName,avatarUrl'
const reporterField = `reporter(${userFields})`
const updaterField = `updater(${userFields})`

export const issueFields = `fields=id,idReadable,summary,description,updated,created,usesMarkdown,${reporterField},${updaterField},links(id,direction,linkType(name),issues(id)),tags(name),${customFields}`