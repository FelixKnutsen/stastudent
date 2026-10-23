import json

with open(r'C:\Users\Felix\.gemini\antigravity\brain\2d35fa9d-a919-4e71-a35a-a484d0874f83\.system_generated\logs\transcript_full.jsonl', 'r', encoding='utf-8') as f:
    for line in f:
        data = json.loads(line)
        if data.get('tool_calls'):
            for tc in data['tool_calls']:
                fn = tc.get('function', {})
                name = fn.get('name') or tc.get('name')
                if name == 'send_message':
                    args = fn.get('arguments') or tc.get('args', {})
                    msg = args.get('Message', '')
                    if 'Elementor Diagnostic & Design Reference Report' in msg:
                        if msg.startswith('"'):
                            try:
                                msg = json.loads(msg)
                            except:
                                pass
                        with open(r'scratch/diagnostic_full.md', 'w', encoding='utf-8') as out:
                            out.write(msg)
print('Done saving scratch/diagnostic_full.md')
