const customFields = 'customFields($type,name,value($type,archived,avatarUrl,buildIntegration,buildLink,color(background,id),description,fullName,id,isResolved,localizedName,login,markdownText,minutes,name,presentation,ringId,text))'

export const issueFields = `fields=id,idReadable,summary,description,reporter(login),links(id,direction,linkType(name),issues(id)),tags(name),${customFields}`
