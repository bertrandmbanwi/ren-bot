module.exports = {
    username: "bet-renovate-bot",
    gitAuthor: "Bet Renovate Bot <337341+bet-renovate-bot@users.noreply.github.com>",
    platform: 'github',
    dependencyDashboard: true,
    labels: ["renovatebot"],
    requiredStatusChecks: null,
    onboarding: true, 
    packageRules: [
        {
            matchManagers: ['terraform'],
            matchUpdateTypes: ['minor', 'patch', 'pin'],
            automerge: true,
            autoApprove: true,
            recreateClosed: true
        },
        {
            matchManagers: ['terraform'],
            matchUpdateTypes: ['major'],
            automerge: false,
            recreateClosed: true
        },
    ],
    enabledManagers: ["terraform"],
    lockFileMaintenance: {
        enabled: true,
        automerge: true
    },
    updateLockFiles: true,
    repositories: ['bertrandmbanwi/TerraformEksSonarqubeDeploy', 'bertrandmbanwi/eks-demo'],
};
