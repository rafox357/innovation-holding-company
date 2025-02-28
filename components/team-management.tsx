"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, X } from "lucide-react"

type TeamMember = {
  id: string
  name: string
  role: string
  avatar: string
}

const initialTeamMembers: TeamMember[] = [
  { id: "1", name: "Alice Johnson", role: "CEO", avatar: "/avatars/alice.jpg" },
  { id: "2", name: "Bob Smith", role: "CTO", avatar: "/avatars/bob.jpg" },
  { id: "3", name: "Carol Williams", role: "CFO", avatar: "/avatars/carol.jpg" },
  { id: "4", name: "David Brown", role: "COO", avatar: "/avatars/david.jpg" },
]

export function TeamManagement() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialTeamMembers)
  const [newMember, setNewMember] = useState({ name: "", role: "" })

  const addTeamMember = () => {
    if (newMember.name && newMember.role) {
      setTeamMembers([...teamMembers, { ...newMember, id: Date.now().toString(), avatar: "/avatars/placeholder.jpg" }])
      setNewMember({ name: "", role: "" })
    }
  }

  const removeTeamMember = (id: string) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id))
  }

  return (
    <Card className="cosmic-card w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="cosmic-title text-2xl">Team Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teamMembers.map((member) => (
              <Card key={member.id} className="cosmic-card flex items-center p-4 space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeTeamMember(member.id)}
                  className="text-destructive"
                >
                  <X className="h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div className="flex-grow space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={newMember.name}
                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                className="cosmic-input"
              />
            </div>
            <div className="flex-grow space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input
                id="role"
                value={newMember.role}
                onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                className="cosmic-input"
              />
            </div>
            <Button onClick={addTeamMember} className="cosmic-button mt-8">
              <Plus className="mr-2 h-4 w-4" /> Add Member
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

